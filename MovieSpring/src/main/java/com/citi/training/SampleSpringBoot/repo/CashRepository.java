
package com.citi.training.SampleSpringBoot.repo;

import com.citi.training.SampleSpringBoot.entities.Cash;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;

public interface CashRepository extends JpaRepository<Cash, Integer> {
    Collection<Cash> netWorth();
}