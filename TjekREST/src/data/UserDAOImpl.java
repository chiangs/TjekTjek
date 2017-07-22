package data;

import java.io.IOException;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.tjek.entities.User;

@Transactional
@Repository 
public class UserDAOImpl implements UserDAO {
	
	@PersistenceContext
	private EntityManager em;
	
	@Autowired
	private PasswordEncoder encoder;
	
	@Override
	public User show(int uid) {
		return em.find(User.class, uid);
	}

	@Override
	public User update(int uid, String userJson) {
		try {
			ObjectMapper mapper = new ObjectMapper();
			User mUser = mapper.readValue(userJson, User.class);
			User uUser = em.find(User.class, uid);
			
			JsonNode root = mapper.readTree(userJson); 
			String newPassword = root.at("/password").asText();
			System.out.println(newPassword);
			String newPasswordSha = encoder.encode(newPassword); 
					
			uUser.setEmail(mUser.getEmail());
			uUser.setPassword(newPasswordSha);
			return uUser;
		} catch (JsonParseException e) {
			e.printStackTrace();
			return null;
		} catch (JsonMappingException e) {
			e.printStackTrace();
			return null;
		} catch (IOException e) {
			e.printStackTrace();
			return null;
		}
	}

	@Override
	public Boolean deactivate(int uid) {
		User dUser = em.find(User.class, uid);
		dUser.setStatus(true);
		return dUser.isStatus();
	}

}
