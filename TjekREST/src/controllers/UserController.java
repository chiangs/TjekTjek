package controllers;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.tjek.entities.User;

import data.UserDAO;

@RestController
public class UserController {

	@Autowired
	private UserDAO userDAO;
	
	@RequestMapping(path = "/user/ping", method = RequestMethod.GET)
	public String ping() {
		return "PONG!";
	}
	
	@RequestMapping(path = "{uid}/user", method = RequestMethod.GET)
	public User show(HttpServletRequest req, HttpServletResponse res, @PathVariable int uid) {
		try {
			res.setStatus(200);
			return userDAO.show(uid);
		} catch (Exception e) {
			res.setStatus(400);
			e.printStackTrace();
			return null;
		}
	}

	@RequestMapping(path = "{uid}/user", method = RequestMethod.PUT)
	public User update(HttpServletRequest req, HttpServletResponse res, @PathVariable int uid, @RequestBody String userJson) {
		res.setStatus(200);
		return userDAO.update(uid, userJson);
	}

	@RequestMapping(path = "{uid}/user", method = RequestMethod.DELETE)
	public Boolean deactivate(HttpServletRequest req, HttpServletResponse res, @PathVariable int uid) {
		try {
			res.setStatus(202);
			return userDAO.deactivate(uid);
		} catch (Exception e) {
			res.setStatus(400);
			e.printStackTrace();
			return null;
		}
	}
}
