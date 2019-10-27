package model;

import com.sun.org.apache.xpath.internal.operations.Bool;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.*;

@Entity
@Table(name = "users")
@EntityListeners(AuditingEntityListener.class)
public class User implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;

	@Column(name = "login", nullable = false)
	private String login;

	@Column(name = "first_name", nullable = false)
	private String firstName;

	@Column(name = "last_name", nullable = false)
	private String lastName;

	@Column(name = "date_of_birth")
	private Date dateOfBirth;

	@Column(name = "is_active", nullable = false)
	private Bool isActive;

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getLogin() {
		return this.login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public String getFirstName() {
		return this.firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return this.lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public Date getDateOfBirth() {
		return this.dateOfBirth;
	}

	public void setDateOfBirth(Date dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	public Bool isActive() {
		return this.isActive;
	}

	public void setIsActive(Bool isActive) {
		this.isActive = isActive;
	}

	@Override
	public String toString() {
		return String.format("Customer[id=%d, login='%s', firstName='%s', lastName='%s', is_active=%b, date_of_birth=%s]", id, login,firstName, lastName, isActive, dateOfBirth.toString());
	}
}