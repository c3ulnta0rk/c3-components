import { FlatTreeControl } from '@angular/cdk/tree';
import { CommonModule } from '@angular/common';
import { Component, effect, model, output } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
  MatTreeModule,
} from '@angular/material/tree';

export interface TreeType<T> {
  id: number;
  level: number;
  name: string;
  ancestorId?: number;
  ancestor?: TreeType<T>;
  children: TreeType<T>[];
  rawData: T;
}

export interface FileNode<RawData> extends TreeType<RawData> {
  expandable: boolean;
}

@Component({
  selector: 'c3-tree',
  standalone: true,
  imports: [
    CommonModule,
    MatTreeModule,
    MatIconModule,
    MatRippleModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './c3-tree.component.html',
  styleUrls: ['./c3-tree.component.scss'],
})
export class C3TreeComponent<
  RawData,
  T extends TreeType<RawData> = TreeType<RawData>
> {
  public readonly treeData = model.required<T[]>();
  public readonly isLoading = model<boolean>(false);
  public readonly treeDataSelected = output<T>();

  private _transformer = (
    node: TreeType<RawData>,
    level: number
  ): FileNode<RawData> => ({
    expandable: !!node.children && node.children.length > 0,
    children: node.children,
    id: node.id,
    level,
    name: node.name,
    rawData: node.rawData,
  });

  constructor() {
    effect(() => {
      this.dataSource.data = this.treeData();
    });
  }

  public hasChild = (_: number, node: T) => node.children.length > 0;

  public treeControl = new FlatTreeControl<FileNode<RawData>>(
    (node) => node.level,
    (node) => node.expandable
  );

  public treeFlattener = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );

  public dataSource = new MatTreeFlatDataSource(
    this.treeControl,
    this.treeFlattener
  );
}
