package com.citi.training.SampleSpringBoot.service;

import com.citi.training.SampleSpringBoot.entities.Cash;

import java.util.Collection;

public interface CashService {
    Collection<Cash> getNetWorth();
}