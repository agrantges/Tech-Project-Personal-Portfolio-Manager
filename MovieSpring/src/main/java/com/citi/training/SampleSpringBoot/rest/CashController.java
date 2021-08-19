package com.citi.training.SampleSpringBoot.rest;

import com.citi.training.SampleSpringBoot.entities.Cash;
import com.citi.training.SampleSpringBoot.service.CashService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
@RequestMapping({"/cash_accounts", "/investment_accounts"})
public class CashController
{

    @Autowired
    private CashService cashService;


    public Double getNetWorth()
    {
         return cashService.getNetWorth();
    }

}