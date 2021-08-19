package com.citi.training.SampleSpringBoot.service;

import com.citi.training.SampleSpringBoot.entities.Cash;
import com.citi.training.SampleSpringBoot.repo.CashRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class CashServiceImpl implements CashService {

    @Autowired
    private CashRepository cashRepository;

    @Override
    public Collection<Cash> getNetWorth() {
        return cashRepository.netWorth();
    }

}