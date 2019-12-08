package main

import (
	"fmt"
	"os"
)

func main()  {
	fmt.Println("Hello world")

	// Create Redis Client
	//client := redis.NewClient(&redis.Options{
	//	Addr:     getEnv("REDIS_URL", "localhost:6379"),
	//	Password: getEnv("REDIS_PASSWORD", ""),
	//	DB:       0,
	//})
}

func getEnv(key, defaultValue string) string {
	value := os.Getenv(key)
	if value == "" {
		return defaultValue
	}
	return value
}