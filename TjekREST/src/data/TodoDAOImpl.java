package data;

import java.util.Set;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.tjek.entities.Todo;
@Transactional
@Repository
public class TodoDAOImpl implements TodoDAO {
	
	@PersistenceContext
	private EntityManager em;

	@Override
	public Set<Todo> index(int uid) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Todo show(int uid, int tid) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Todo create(int uid, String todoJson) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Todo update(int uid, int tid, String todoJson) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Boolean destroy(int uid, int tid) {
		// TODO Auto-generated method stub
		return null;
	}

}
