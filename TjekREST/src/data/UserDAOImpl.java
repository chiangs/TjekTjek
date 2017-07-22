package data;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.tjek.entities.User;

@Transactional
@Repository 
public class UserDAOImpl implements UserDAO {
	
	@PersistenceContext
	private EntityManager em;
	
	@Override
	public User show(int uid) {
		return em.find(User.class, uid);
	}

	@Override
	public User update(int uid) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Boolean deactivate(int uid) {
		User dUser = em.find(User.class, uid);
		dUser.setStatus(false);
		return dUser.isStatus();
	}

}
