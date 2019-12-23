import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PubSubService } from 'src/app/_shared/_services/pub-sub.service';
import { LibrarianService } from 'src/app/_shared/_services/librarian.service';
import { Librarian } from 'src/app/_shared/_models/librarian';
import { slideInOutAnimation } from 'src/app/_shared/_animations/slide-in-out.animation';

@Component({
    selector: 'app-librarian-add-edit',
    templateUrl: './librarian-add-edit.component.html',
    styleUrls: ['./librarian-add-edit.component.css'],
    // make slide in/out animation available to this component
    animations: [slideInOutAnimation],

    // attach the slide in/out animation to the host (root) element of this component
    host: { '[@slideInOutAnimation]': '' }
})
export class LibrarianAddEditComponent implements OnInit {

    title: string;
    librarian: Librarian;
    saving = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private librarianService: LibrarianService,
        private pubSubService: PubSubService
    ) { }

    ngOnInit() {
        console.log("ONINIT")
        this.title = 'Add Librarian';
        const librarianId = Number(this.route.snapshot.params['id']);
        if (librarianId) {
            this.title = 'Edit Librarian';
            this.librarianService.getById(librarianId).subscribe(x => this.librarian = x);
        }
    }

    saveLibrarian() {
        // save librarian
        this.saving = true;
        const action = this.librarian.id ? 'update' : 'create';
        this.librarianService[action](this.librarian)
            .subscribe(() => {
                this.saving = false;

                // redirect to librarians view
                this.router.navigate(['list']);

                // publish event so list component refreshes
                this.pubSubService.publish('librarians-updated');
            });
    }
}