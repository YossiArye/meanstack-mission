import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Task } from './task';
import { Person } from './person';
// import { Tasks_person} from './tasks_person';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class MyServiceService {

  constructor(private http: HttpClient) { }

  get(url:string): Observable<any[]> {
    return this.http.get<any[]>(url)
      .pipe(
        catchError(this.handleError('get', []))
      );
  }

  post(item: any, url:string): Observable<any> {
    return this.http.post<any>(url, item, httpOptions).pipe(
      catchError(this.handleError<any>('post'))
    );
  }

  // /** GET hero by id. Return `undefined` when id not found */
  // getHeroNo404<Data>(id: number): Observable<Hero> {
  //   const url = `${this.tasksUrl}/?id=${id}`;
  //   return this.http.get<Hero[]>(url)
  //     .pipe(
  //       map(heroes => heroes[0]), // returns a {0|1} element array
  //       tap(h => {
  //         const outcome = h ? `fetched` : `did not find`;
  //         this.log(`${outcome} hero id=${id}`);
  //       }),
  //       catchError(this.handleError<Hero>(`getHero id=${id}`))
  //     );
  // }

  /** GET hero by id. Will 404 if id not found */
  // getHero(id: number): Observable<Hero> {
  //   const url = `${this.tasksUrl}/${id}`;
  //   return this.http.get<Hero>(url).pipe(
  //     tap(_ => this.log(`fetched hero id=${id}`)),
  //     catchError(this.handleError<Hero>(`getHero id=${id}`))
  //   );
  // }

  // /* GET heroes whose name contains search term */
  // searchHeroes(term: string): Observable<Hero[]> {
  //   if (!term.trim()) {
  //     // if not search term, return empty hero array.
  //     return of([]);
  //   }
  //   return this.http.get<Hero[]>(`${this.tasksUrl}/?name=${term}`).pipe(
  //     tap(_ => this.log(`found heroes matching "${term}"`)),
  //     catchError(this.handleError<Hero[]>('searchHeroes', []))
  //   );
  // }

  // //////// Save methods //////////

  // /** POST: add a new hero to the server */
  // addHero (hero: Hero): Observable<Hero> {
  //   return this.http.post<Hero>(this.tasksUrl, hero, httpOptions).pipe(
  //     tap((hero: Hero) => this.log(`added hero w/ id=${hero.id}`)),
  //     catchError(this.handleError<Hero>('addHero'))
  //   );
  // }

  // /** DELETE: delete the hero from the server */
  // deleteHero (hero: Hero | number): Observable<Hero> {
  //   const id = typeof hero === 'number' ? hero : hero.id;
  //   const url = `${this.tasksUrl}/${id}`;

  //   return this.http.delete<Hero>(url, httpOptions).pipe(
  //     tap(_ => this.log(`deleted hero id=${id}`)),
  //     catchError(this.handleError<Hero>('deleteHero'))
  //   );
  // }

  // /** PUT: update the hero on the server */
  // updateHero (hero: Hero): Observable<any> {
  //   return this.http.put(this.tasksUrl, hero, httpOptions).pipe(
  //     tap(_ => this.log(`updated hero id=${hero.id}`)),
  //     catchError(this.handleError<any>('updateHero'))
  //   );
  // }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  // private log(message: string) {
  //   this.messageService.add(`TaskService: ${message}`);
  // }
}