import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from './app.service';

@Component({
    selector: 'common-loader',
    templateUrl: './loader.component.html'
})

export class LoaderComponent implements OnDestroy {

    private subscription = new Subscription()

    loadingStatus = false;

    constructor(
        private appService: AppService
    ) {
        this.loadingStatus = false
        this.subscription = this.appService.isLoaderVisible().subscribe( (status) => {
            console.log('status set to '+status)
            this.loadingStatus = status
        });
        
    }

    ngOnDestroy() {
        
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }
}