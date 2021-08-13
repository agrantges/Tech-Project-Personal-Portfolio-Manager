package com.citi.training.SampleSpringBoot;

import com.citi.training.SampleSpringBoot.entities.Cash;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class SampleSpringBootApplicationTests {

	@Test
	void testNetWorth()
	{
		assertTrue(Cash.netWorth() == 524757.6381835938);
	}

}
