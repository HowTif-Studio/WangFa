package com.wangFa.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@Getter
@Setter
@ToString
@EnableJpaAuditing // 自動填入日期時間

public class Base {
    @Column(name = "created_by")
    @CreatedBy
    private String create_by;

    @Column(name = "created_time")
    @CreatedDate
    @Temporal(TemporalType.TIMESTAMP)
    private String create_time;

    @Column(name = "update_by")
    @LastModifiedBy
    private String update_by;

    @Column(name = "update_time")
    @LastModifiedDate
    @Temporal(TemporalType.TIMESTAMP)
    private String update_time;

}
