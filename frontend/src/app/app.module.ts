import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { CashComponent } from './evaluation/cash/cash.component';
import { InvestmentComponent } from './evaluation/investment/investment.component';
import { ChartsComponent } from './charts/charts.component';
import { NetWorthComponent } from './charts/net-worth/net-worth.component';
<<<<<<< HEAD
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
=======
>>>>>>> 0fcda87679e45b958ae443ec0cd4a6f529028f0e
import { MarketMoversComponent } from './market-movers/market-movers.component';
import { IndicesComponent } from './market-movers/indices/indices.component';
import { GainersComponent } from './market-movers/gainers/gainers.component';
import { LosersComponent } from './market-movers/losers/losers.component';
<<<<<<< HEAD
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
=======

>>>>>>> 0fcda87679e45b958ae443ec0cd4a6f529028f0e

@NgModule({
  declarations: [
    AppComponent,
    EvaluationComponent,
    CashComponent,
    InvestmentComponent,
    ChartsComponent,
    NetWorthComponent,
    MarketMoversComponent,
    IndicesComponent,
    GainersComponent,
    LosersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
