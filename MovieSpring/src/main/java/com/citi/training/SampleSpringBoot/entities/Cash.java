package com.citi.training.SampleSpringBoot.entities;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name="cash_accounts")
@SecondaryTable(name = "investment_accounts")
public class Cash implements Serializable {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    //cash table
    @Column(name="acct_number")
    private String acct_number;
    @Column(name="routing_number")
    private String routing_number;
    @Column(name="bank")
    private String bank;
    @Column(name="value")
    private static Double value;
    @Column(name="date_time")
    private String date_time;

    //investment table
    @Column(name="acct_number", table = "investment_accounts")
    private  String acct_number1;
    @Column(name="routing_number" , table = "investment_accounts")
    private String routing_number1;
    @Column(name="bank" , table = "investment_accounts")
    private String bank1;
    @Column(name="value" , table = "investment_accounts")
    private static Double value1;
    @Column(name="date_time" , table = "investment_accounts")
    private String date_time1;

    // cash value
    public Double cashAccounts( )
    {
        return value;
    }
    // investment value
    public Double investmentAccounts( )
    {
        return value1;
    }
    //net worth value
    public static Double netWorth()
    {
        return value + value1;
    }

}

