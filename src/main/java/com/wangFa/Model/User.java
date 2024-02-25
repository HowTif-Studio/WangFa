package com.wangFa.Model;

import jakarta.persistence.*;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Entity
@Table(name = "user")
public class User extends Base {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "uid")
    private int uid;

    public int getId() {
        return uid;
    }
    public void setId(int id) {
        this.uid = uid;
    }

    @Column(name = "username", unique = true)
    private String username;
    public String getusername() {
        return username;
    }
    public void setusername(String username) {
        this.username = username;
    }

    @Column(name = "password")
    private String password;

    public String getpassword() {
        return password;
    }
        public void setpassword(String password) {
        this.password = password;
    }

    @Column(name = "salt")
    private String salt;

    public String getsalt() {
        return salt;
    }
    public void setsalt(String salt) {
        this.salt = salt;
    }


}
