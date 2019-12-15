package main

import (
	"backend/utils"
	"fmt"
	"github.com/gorilla/mux"
	"net/http"
	"backend/controllers"
)

func main()  {
	fmt.Println()
	fmt.Println("Start main")

	router := mux.NewRouter()

	router.HandleFunc("/api/user", controllers.CreateUser).Methods("POST")
	router.HandleFunc("/api/user/{id:[0-9]+}", controllers.GetUser).Methods("GET")
	router.HandleFunc("/api/users", controllers.GetUsers).Methods("GET")

	port := utils.GetEnvData("PORT", "8080")

	err := http.ListenAndServe(":"+port, router)
	if err != nil {
		fmt.Print(err)
	}
}
