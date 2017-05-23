import static org.junit.Assert.*;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import com.tjek.entities.Todo;

public class TodoTest {
	
	private EntityManagerFactory emf;
	private EntityManager em;
	private Todo todo;
	
	@Before
	public void setup() {
		emf = Persistence.createEntityManagerFactory("TjekTjek");
		em = emf.createEntityManager();
		todo = em.find(Todo.class, 2);
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
	public void test_Todo_has_description() {
		assertEquals("test description", todo.getDescription());
	}
	
	@Test
	public void test_Todo_has_user() {
		assertEquals(1, todo.getUser().getId());
	}

}
