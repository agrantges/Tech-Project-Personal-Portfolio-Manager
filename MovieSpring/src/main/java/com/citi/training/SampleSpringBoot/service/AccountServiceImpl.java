package com.citi.training.SampleSpringBoot.service;

import com.citi.training.SampleSpringBoot.entities.Account;
import com.citi.training.SampleSpringBoot.repo.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;

@Service
public class AccountServiceImpl implements AccountService {

    @Autowired
    private AccountRepository accountRepository;

    @Override
    public List<Double> getNetWorth() {
        return accountRepository.getNetWorth();
    }

    @Override
    public Collection<Account> getAllAccounts()
    {
        return accountRepository.findAll();
    }

    @Override
    public List<Double> getAllValues() {
        return accountRepository.findAllValues();
    }

    @Override
    public Collection<Account> getAllCash()
    {
        return accountRepository.getAllCash();
    }

    @Override
    public Collection<Account> getAllInvestment()
    {
        return accountRepository.getAllInvestment();
    }

}