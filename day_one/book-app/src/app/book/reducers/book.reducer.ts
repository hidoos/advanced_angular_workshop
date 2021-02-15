import {Action, createReducer, on} from '@ngrx/store';
import * as BookActions from '../actions/book.actions';
import {Book} from '../models/book';

export const bookFeatureKey = 'book';

export interface State {
    books: Book[];
    loading: boolean;
    error: boolean;
}

export const initialState: State = {
    books: [],
    loading: false,
    error: false
};

export const reducer = createReducer(
    initialState,

    on(BookActions.loadBooks, state => ({...state, loading: true})),
    on(BookActions.loadBooksSuccess, (state, action) => state),
    on(BookActions.loadBooksFailure, (state, action) => state),
);

