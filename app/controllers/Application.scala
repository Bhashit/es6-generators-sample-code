package controllers

import play.api._
import play.api.mvc._
import java.util.concurrent.TimeUnit

object Application extends Controller {

  def index = Action { request =>
    Ok(views.html.index("Your new application is ready."))
  }

  def generators = Action {
	Ok(views.html.generators())
  }

  def request1 = Action {
	TimeUnit.SECONDS.sleep(2)
    Ok("response 1");
  }

  def request2 = Action {
	TimeUnit.SECONDS.sleep(2)
    Ok("response 2");
  }

  def request3 = Action {
	TimeUnit.SECONDS.sleep(2)
    Ok("response 3");
  }
}