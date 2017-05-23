package controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {

	@RequestMapping(path = "ping", method = RequestMethod.GET)
	public String ping() {
		return "PONG!";
	}
}
