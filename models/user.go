package models

import "github.com/jinzhu/gorm"

//a struct to rep user account
type User struct {
	gorm.Model
	Email    string `json:"email"`
	Password string `json:"password"`
	Token    string `json:"token";sql:"-"`
}