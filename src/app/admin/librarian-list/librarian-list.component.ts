import { Component, OnInit, Input } from '@angular/core';
import { Librarian } from 'src/app/_shared/_models/librarian';
import { LibrarianService } from 'src/app/_shared/_services/librarian.service';
import { Subscription } from 'rxjs';
import { fadeInAnimation } from 'src/app/_shared/_animations/fade-in.animation';
import { PubSubService } from 'src/app/_shared/_services/pub-sub.service';
import { RefreshService } from 'src/app/_shared/_services/refresh.service';


@Component({
    selector: 'app-librarian-list',
    templateUrl: './librarian-list.component.html',
    styleUrls: ['./librarian-list.component.css'],

    // make fade in animation available to this component
    animations: [fadeInAnimation],

    // attach the fade in animation to the host (root) element of this component
    host: { '[@fadeInAnimation]': '' }
})
export class LibrarianListComponent implements OnInit {

    shift: boolean

    librarians: Librarian[];
    subscription: Subscription;

    loading = false;

    constructor(
        private librarianService: LibrarianService,
        private pubSubService: PubSubService,
        private refreshService: RefreshService
    ) {
        this.refreshService.onClick.subscribe(x => {
            this.shift = x;
            this.changeTurn();
        });
    }

    ngOnInit() {
        this.loadLibrarians();

        // reload librarians when updated
        this.subscription = this.pubSubService.on('librarians-updated').subscribe(() => this.loadLibrarians());

    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }

    deleteLibrarian(id: number) {
        console.log(id)
        this.librarianService.delete(id).subscribe(() => {
            // remove librarian from librarians array after deleting
            this.librarians = this.librarians.filter(x => x.id !== id);
        });
    }

    private loadLibrarians() {
        // this.librarianService.getAll().subscribe(x => this.librarians = x);
        this.librarianService.getAll().subscribe(x => this.librarians = x);
    }

    private loadLibrarians2() {
        this.librarianService.getAll2().subscribe(x => this.librarians = x);
    }

    private changeTurn() {
        this.shift ? this.loadLibrarians() : this.loadLibrarians2();
    }
}