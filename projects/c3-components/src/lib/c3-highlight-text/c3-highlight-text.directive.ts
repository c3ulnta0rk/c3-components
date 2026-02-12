import { Directive, ElementRef, effect, inject, input } from '@angular/core';

/**
 * @description Directive that highlights matching text within the host element's content.
 * Wraps matched text in `<span class="c3-highlight">` inside a `<span class="c3-highlight_container">`.
 *
 * @selector [c3HighlightText]
 * @input c3HighlightText - The text to highlight.
 * @input c3HighlightTextCaseSensitive - Whether the match should be case-sensitive (default: false).
 *
 * @example
 * ```html
 * <p [c3HighlightText]="searchTerm">Some text to search in</p>
 * <p [c3HighlightText]="searchTerm" [c3HighlightTextCaseSensitive]="true">Case-sensitive match</p>
 * ```
 */
@Directive({
  selector: '[c3HighlightText]',
  standalone: true,
})
export class C3HighlightTextDirective {
  /** The text string to highlight within the host element. */
  public readonly highlightText = input<string>('', {
    alias: 'c3HighlightText',
  });

  /** Whether the highlighting should be case-sensitive. Defaults to false. */
  public readonly caseSensitive = input<boolean>(false, {
    alias: 'c3HighlightTextCaseSensitive',
  });

  private readonly _el = inject(ElementRef);

  constructor() {
    effect(() => {
      const text = this.highlightText();
      const sensitive = this.caseSensitive();

      if (text) {
        this._applyHighlight(this._el.nativeElement, text, sensitive);
      } else {
        this._resetHighlights(this._el.nativeElement);
      }
    });
  }

  /** Walks the DOM tree and wraps matching text nodes in highlight spans. */
  private _applyHighlight(
    element: HTMLElement,
    text: string,
    caseSensitive: boolean
  ): void {
    this._resetHighlights(element);

    if (!text) return;

    const flags = caseSensitive ? '' : 'i';
    const regex = new RegExp(`(${this._escapeRegExp(text)})`, flags);
    const textNodes = this._getTextNodes(element);

    textNodes.forEach((node) => {
      const parentNode = node.parentNode;
      if (!(parentNode instanceof Element)) return;
      if (parentNode.classList.contains('c3-highlight_container')) return;

      const match = node.textContent?.match(regex);
      if (match) {
        const wrapper = document.createElement('span');
        wrapper.classList.add('c3-highlight_container');
        wrapper.innerHTML = node.textContent!.replace(
          regex,
          '<span class="c3-highlight">$1</span>'
        );
        parentNode.replaceChild(wrapper, node);
      }
    });
  }

  /** Escapes special regex characters in the search text. */
  private _escapeRegExp(text: string): string {
    return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  /** Removes all previously applied highlight wrappers, restoring original text nodes. */
  private _resetHighlights(element: HTMLElement): void {
    element
      .querySelectorAll('.c3-highlight_container')
      .forEach((highlight) => {
        const parent = highlight.parentNode;
        if (parent) {
          parent.insertBefore(
            document.createTextNode(highlight.textContent ?? ''),
            highlight
          );
          parent.removeChild(highlight);
        }
      });
  }

  /** Recursively collects all text nodes within an element. */
  private _getTextNodes(element: HTMLElement): Node[] {
    const textNodes: Node[] = [];
    const nodes = element.childNodes;

    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      if (node.nodeType === Node.TEXT_NODE) {
        textNodes.push(node);
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        textNodes.push(...this._getTextNodes(node as HTMLElement));
      }
    }

    return textNodes;
  }
}
