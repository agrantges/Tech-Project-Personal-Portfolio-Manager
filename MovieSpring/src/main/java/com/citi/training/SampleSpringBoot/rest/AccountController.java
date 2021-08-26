package com.citi.training.SampleSpringBoot.rest;

import com.citi.training.SampleSpringBoot.entities.Account;
import com.citi.training.SampleSpringBoot.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.Collection;
import java.util.List;

@RestController
@RequestMapping({"/accounts"})
public class AccountController
{

    @Autowired
    private AccountService accountService;

    @CrossOrigin
    @GetMapping(path="/all")
    public @ResponseBody Collection<Account> getAccounts()
    {
        return accountService.getAllAccounts();
    }

    @CrossOrigin
    @GetMapping(path="/values")
    public @ResponseBody List<Double> getValues()
    {
        return accountService.getAllValues();
    }

    @CrossOrigin
    @GetMapping(path="/networth")
    public @ResponseBody List<Double> getNetWorth()
    {
        return accountService.getNetWorth();
    }

    @CrossOrigin
    @GetMapping(path="/cash")
    public @ResponseBody Collection<Account> getCash()
    {
        return accountService.getAllCash();
    }

    @CrossOrigin
    @GetMapping(path="/investment")
    public @ResponseBody Collection<Account> getInvestment()
    {
        return accountService.getAllInvestment();
    }
}