import static org.junit.Assert.*;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import com.tjek.entities.User;

public class UserTest {

	private EntityManagerFactory emf;
	private EntityManager em;
	private User user;
	
	@Before
	public void setup() {
		emf = Persistence.createEntityManagerFactory("TjekTjek");
		em = emf.createEntityManager();
		user = em.find(User.class, 1);
	}
	
	@After
	public void teardown() {
		em.close();
		emf.close();
	}
	
	@Test
	public void test() {
		boolean pass = true;
		assertEquals(pass, true);
	}
	
	@Test
	public void test_User_has_email() {
		assertEquals("test@test.com", user.getEmail());
	}
	
	@Test
	public void test_User_has_password() {
		assertEquals("test", user.getPassword());
	}
}
