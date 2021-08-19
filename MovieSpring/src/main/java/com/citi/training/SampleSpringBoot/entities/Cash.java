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
    @Column(name="acct_number", table = "cash_accounts", insertable=false, updatable=false)
    private String acct_number;
    @Column(name="routing_number", table = "cash_accounts", insertable=false, updatable=false)
    private String routing_number;
    @Column(name="bank", table = "cash_accounts", insertable=false, updatable=false)
    private String bank;
    @Column(name="value", table = "cash_accounts", insertable=false, updatable=false)
    private static Double value;
    @Column(name="date_time", table = "cash_accounts", insertable=false, updatable=false)
    private String date_time;

    //investment table
    @Column(name="acct_number", table = "investment_accounts", insertable=false, updatable=false)
    private  String acct_number1;
    @Column(name="routing_number" , table = "investment_accounts", insertable=false, updatable=false)
    private String routing_number1;
    @Column(name="bank" , table = "investment_accounts", insertable=false, updatable=false)
    private String bank1;
    @Column(name="value" , table = "investment_accounts", insertable=false, updatable=false)
    private static Double value1;
    @Column(name="date_time" , table = "investment_accounts", insertable=false, updatable=false)
    private String date_time1;

    private static Double netWorth;

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

    public static Double getNetWorth()
    {
        netWorth = value + value1;
        return netWorth;
    }


}

