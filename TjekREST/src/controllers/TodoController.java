package controllers;

import java.util.Collection;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.tjek.entities.Todo;

import data.TodoDAO;

@RestController
public class TodoController {
	
	@Autowired
	private TodoDAO todoDAO;
	
	@RequestMapping(path = "ping", method = RequestMethod.GET)
	public String ping() {
		return "PONG!";
	}

	@RequestMapping(path = "user/{uid}/todo", method = RequestMethod.GET)
	public Collection<Todo> index(HttpServletRequest req, HttpServletResponse res, @PathVariable int uid) {
		res.setStatus(200);
		return todoDAO.index(uid);
	}

}
