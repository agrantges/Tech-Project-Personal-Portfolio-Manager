package com.citi.training.SampleSpringBoot.entities;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name="accounts")
public class Account implements Serializable {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    //accounts table
    @Column(name="acct_number")
    private String acct_number;
    @Column(name="routing_number")
    private String routing_number;
    @Column(name="acct_type")
    private String acct_type;
    @Column(name="bank")
    private String bank;
    @Column(name="value")
    private Double value;
    @Column(name="date_time")
    private String date_time;

    public Double getValue() {
        return value;
    }

    public void setValue(Double value) {
        this.value = value;
    }

    public String getRouting_number() {
        return routing_number;
    }

    public void setRouting_number(String routing_number) {
        this.routing_number = routing_number;
    }

    public String getAcct_number() {
        return acct_number;
    }

    public void setAcct_number(String acct_number) {
        this.acct_number = acct_number;
    }

    public String getBank() {
        return bank;
    }

    public void setBank(String bank) {
        this.bank = bank;
    }

    public String getDate_time() {
        return date_time;
    }

    public void setDate_time(String date_time) {
        this.date_time = date_time;
    }

    public String getAcct_type() {
        return acct_type;
    }

    public void setAcct_type(String acct_type) {
        this.acct_type = acct_type;
    }
}

