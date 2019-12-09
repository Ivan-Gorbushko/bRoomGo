package models

import (
	"backend/utils"
	"fmt"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
)

var db *gorm.DB

func init()  {
	username := utils.GetEnvData("db_user", "")
	password := utils.GetEnvData("db_pass", "")
	dbHost := utils.GetEnvData("db_host", "")
	dbName := utils.GetEnvData("db_name", "")
	dbCharset := utils.GetEnvData("db_charset", "utf8")
	dbParseTime := utils.GetEnvData("db_parse_time", "True")
	dbLoc := utils.GetEnvData("db_loc", "Local")

	dbUri := fmt.Sprintf("%s:%s@tcp(%s:3306)/%s?charset=%s&parseTime=%s&loc=%s", username, password, dbHost, dbName, dbCharset, dbParseTime, dbLoc)
	fmt.Println(dbUri)

	conn, err := gorm.Open("mysql", dbUri)
	if err != nil {
		fmt.Print(err)
	}

	db = conn
	//db.Debug().AutoMigrate(&User{})
	db.AutoMigrate(&User{})
}

func GetDB() *gorm.DB {
	return db
}
