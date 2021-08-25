import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { CashComponent } from './evaluation/cash/cash.component';
import { InvestmentComponent } from './evaluation/investment/investment.component';
import { ChartsComponent } from './charts/charts.component';
import { NetWorthComponent } from './charts/net-worth/net-worth.component';
import { MarketMoversComponent } from './market-movers/market-movers.component';
import { IndicesComponent } from './market-movers/indices/indices.component';
import { GainersComponent } from './market-movers/gainers/gainers.component';
import { LosersComponent } from './market-movers/losers/losers.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';

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
    BrowserAnimationsModule,
    NgbModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
