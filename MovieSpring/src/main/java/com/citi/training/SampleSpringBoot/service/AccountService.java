package com.citi.training.SampleSpringBoot.service;

import com.citi.training.SampleSpringBoot.entities.Account;

import java.util.Collection;
import java.util.List;

public interface AccountService {
    List<Double> getNetWorth();
    Collection<Account> getAllAccounts();
    List<Double> getAllValues();
    Collection<Account> getAllCash();
    Collection<Account> getAllInvestment();
}