package data;

import com.tjek.entities.User;

public interface UserDAO {
	
	public User show(int uid);
	
	public User update(int uid);
	
	public Boolean deactivate(int uid);
}
