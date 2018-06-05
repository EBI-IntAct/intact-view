import {Interactor} from './interactor.model';
import {InteractorFacets} from './interactor-facets.model';
import {Filter} from './filter.model';

export class InteractorsSearchResult {
  private _content: Interactor[];
  private _numberOfElements: number;

  private _facetResultPages: InteractorFacets[];
  private _filtersType: Filter[];

  constructor(content: Interactor[],
              numberOfElements: number,
              facetResultPages: InteractorFacets[],
              filtersType: Filter[]) {
    this._content = content;
    this._numberOfElements = numberOfElements;
    this._facetResultPages = facetResultPages;
    this._filtersType = filtersType;
  }

  /** GETTERS AND SETTERS **/

  get content(): Interactor[] {
    return this._content;
  }

  set content(value: Interactor[]) {
    this._content = value;
  }

  get numberOfElements(): number {
    return this._numberOfElements;
  }

  set numberOfElements(value: number) {
    this._numberOfElements = value;
  }

  get facetResultPages(): InteractorFacets[] {
    return this._facetResultPages;
  }

  set facetResultPages(value: InteractorFacets[]) {
    this._facetResultPages = value;
  }

  get facetFields(): Filter[] {
    return this._filtersType;
  }

  set facetFields(value: Filter[]) {
    this._filtersType = value;
  }
}
