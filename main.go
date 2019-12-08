package main

import (
	"fmt"
	"github.com/gorilla/mux"
	"net/http"
	"os"
)

func main()  {
	fmt.Println("Hello world")

	router := mux.NewRouter()

	port := getEnv("PORT", "8080")

	err := http.ListenAndServe(":"+port, router)
	if err != nil {
		fmt.Print(err)
	}
}

func getEnv(key, defaultValue string) string {
	value := os.Getenv(key)
	if value == "" {
		return defaultValue
	}
	return value
}