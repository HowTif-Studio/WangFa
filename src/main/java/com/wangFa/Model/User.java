package com.wangFa.Model;

public class User {
    private Integer id;
    private String username;
    private Integer password;
    private UserAuthority authority;

    public Integer getId() {
//        var user = new User();
//        user.id = "101";
//        user.username = "test101";
//        user.password = "123456";
//        user.authority = UserAuthority.ADMIN;

        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }


    public String getName() {
//        var user = new User();
//        user.id = "102";
//        user.username = "test102";
//        user.password = "654321";
//        user.authority = UserAuthority.NORMAL;

        return username;
    }

    public void setName(String name) {
        this.username = username;
    }
    public UserAuthority getAuthority() {
//        var user = new User();
//        user.id = "103";
//        user.username = "test103";
//        user.password = "000000";
//        user.authority = UserAuthority.GUEST;

        return authority;
    }

    public void setAuthority(UserAuthority authority) {
        this.authority = authority;
    }

    public Integer getPassword() {
        return password;
    }

    public void setPassword(Integer password) {
        this.password = password;
    }

}
