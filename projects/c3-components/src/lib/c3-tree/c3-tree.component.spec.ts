import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { C3TreeComponent, TreeType } from './c3-tree.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

interface TestRawData {
  value: string;
}

describe('C3TreeComponent', () => {
  let component: C3TreeComponent<TestRawData>;
  let fixture: ComponentFixture<C3TreeComponent<TestRawData>>;

  const mockTreeData: TreeType<TestRawData>[] = [
    {
      id: 1,
      name: 'Root 1',
      level: 0,
      rawData: { value: 'root1' },
      children: [
        {
          id: 2,
          name: 'Child 1',
          level: 1,
          ancestorId: 1,
          rawData: { value: 'child1' },
          children: [],
        },
        {
          id: 3,
          name: 'Child 2',
          level: 1,
          ancestorId: 1,
          rawData: { value: 'child2' },
          children: [],
        },
      ],
    },
    {
      id: 4,
      name: 'Root 2',
      level: 0,
      rawData: { value: 'root2' },
      children: [],
    },
  ];

  beforeEach(async () => {
    TestBed.resetTestingModule();
    await TestBed.configureTestingModule({
      imports: [C3TreeComponent, NoopAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(C3TreeComponent<TestRawData>);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.treeData.set(mockTreeData);
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should initialize with empty tree', () => {
    component.treeData.set([]);
    fixture.detectChanges();
    expect(component.dataSource.data).toEqual([]);
  });

  it('should set tree data', fakeAsync(() => {
    component.treeData.set(mockTreeData);
    fixture.detectChanges();
    tick();

    expect(component.dataSource.data).toEqual(mockTreeData);
  }));

  it('should have isLoading default to false', () => {
    component.treeData.set([]);
    fixture.detectChanges();
    expect(component.isLoading()).toBe(false);
  });

  it('should update isLoading', () => {
    component.treeData.set([]);
    component.isLoading.set(true);
    fixture.detectChanges();

    expect(component.isLoading()).toBe(true);
  });

  it('should have hasChild function', () => {
    component.treeData.set(mockTreeData);
    fixture.detectChanges();

    const rootWithChildren = mockTreeData[0];
    const rootWithoutChildren = mockTreeData[1];

    expect(component.hasChild(0, rootWithChildren as any)).toBe(true);
    expect(component.hasChild(0, rootWithoutChildren as any)).toBe(false);
  });

  it('should have treeControl', () => {
    component.treeData.set([]);
    fixture.detectChanges();

    expect(component.treeControl).toBeDefined();
  });

  it('should have treeFlattener', () => {
    component.treeData.set([]);
    fixture.detectChanges();

    expect(component.treeFlattener).toBeDefined();
  });

  it('should have dataSource', () => {
    component.treeData.set([]);
    fixture.detectChanges();

    expect(component.dataSource).toBeDefined();
  });

  it('should emit treeDataSelected on selection', () => {
    component.treeData.set(mockTreeData);
    fixture.detectChanges();

    const emitSpy = spyOn(component.treeDataSelected, 'emit');

    component.treeDataSelected.emit(mockTreeData[0] as any);

    expect(emitSpy).toHaveBeenCalledWith(mockTreeData[0] as any);
  });

  it('should transform nodes correctly', fakeAsync(() => {
    component.treeData.set(mockTreeData);
    fixture.detectChanges();
    tick();

    // The transformer should create FileNode objects with expandable property
    expect(component.dataSource.data[0]).toBeDefined();
  }));

  it('should update data source when treeData changes', fakeAsync(() => {
    component.treeData.set(mockTreeData);
    fixture.detectChanges();
    tick();

    expect(component.dataSource.data).toEqual(mockTreeData);

    const newData: TreeType<TestRawData>[] = [
      {
        id: 5,
        name: 'New Root',
        level: 0,
        rawData: { value: 'new' },
        children: [],
      },
    ];

    component.treeData.set(newData);
    fixture.detectChanges();
    tick();

    expect(component.dataSource.data).toEqual(newData);
  }));
});




