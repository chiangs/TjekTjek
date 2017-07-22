package data;

import com.tjek.entities.User;

public interface UserDAO {
	
	public User show(int uid);
	
	public User update(int uid, String userJson);
	
	public Boolean deactivate(int uid);
}
