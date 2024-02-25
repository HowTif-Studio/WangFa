package com.wangFa.Model;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Entity
@Table(name = "Product")

public class Product extends Base{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "productname")
    private String productname;

    @Column(name = "size")
    private String size;

    @Column(name = "traits")
    private String traits;

    @Column(name = "des")
    private String des;

    @Column(name = "product_pic")
    private String product_pic;

    @Column(name = "Spec_pic")
    private String Spec_pic;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getProductname() {
        return productname;
    }

    public void setProductname(String productname) {
        this.productname = productname;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public String getTraits() {
        return traits;
    }

    public void setTraits(String traits) {
        this.traits = traits;
    }

    public String getDes() {
        return des;
    }

    public void setDes(String des) {
        this.des = des;
    }

    public String getProduct_pic() {
        return product_pic;
    }

    public void setProduct_pic(String product_pic) {
        this.product_pic = product_pic;
    }

    public String getSpec_pic() {
        return Spec_pic;
    }

    public void setSpec_picture(String spec_pic) {
        Spec_pic = spec_pic;
    }

}
