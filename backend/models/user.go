package models

import (
	"bRoomGo/utils"
	"fmt"
	"github.com/jinzhu/gorm"
)

//a struct to rep user account
type User struct {
	gorm.Model
	Age		 string `json:"age"`
	Name	 string `json:"name"`
	Email    string `json:"email"`
	Password string `json:"password"`
}

func (user *User) Validate() (map[string]interface{}, bool) {
	if user.Age == "" {
		return utils.Message(false, "User age should be on the payload"), false
	}

	if user.Name == "" {
		return utils.Message(false, "User name should be on the payload"), false
	}

	if user.Email == "" {
		return utils.Message(false, "User email should be on the payload"), false
	}

	if user.Password == "" {
		return utils.Message(false, "User password should be on the payload"), false
	}

	//All the required parameters are present
	return utils.Message(true, "success"), true
}

func (user *User) Create() map[string]interface{} {

	if resp, ok := user.Validate(); !ok {
		return resp
	}

	GetDB().Create(user)

	resp := utils.Message(true, "success")
	resp["user"] = user
	return resp
}

func GetUser(id uint64) *User {

	user := &User{}
	err := GetDB().Table("users").Where("id = ?", id).First(user).Error
	if err != nil {
		return nil
	}
	return user
}

func GetUsers() []*User {

	users := make([]*User, 0)
	err := GetDB().Table("users").Find(&users).Error
	if err != nil {
		fmt.Println(err)
		return nil
	}

	return users
}