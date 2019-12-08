package main

import (
	"fmt"
	"github.com/gorilla/mux"
	"net/http"
	"bRoomGo/utils"
	"bRoomGo/models"
)

func main()  {
	fmt.Println()
	fmt.Println("Start main")

	router := mux.NewRouter()

	port := utils.GetEnvData("PORT", "8080")

	models.Test()

	err := http.ListenAndServe(":"+port, router)
	if err != nil {
		fmt.Print(err)
	}
}