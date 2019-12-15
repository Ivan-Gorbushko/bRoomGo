package controllers

import (
	"backend/models"
	"backend/utils"
	"encoding/json"
	"github.com/gorilla/mux"
	"net/http"
	"strconv"
)

var CreateUser = func(w http.ResponseWriter, r *http.Request) {
	user := &models.User{}

	err := json.NewDecoder(r.Body).Decode(user)
	if err != nil {
		utils.Respond(w, utils.Message(false, "Error while decoding request body"))
		return
	}

	resp := user.Create()
	utils.Respond(w, resp)
}

var GetUser = func(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id,_ := strconv.ParseUint(vars["id"], 10, 32)
	data := models.GetUser(id)
	resp := utils.Message(true, "success")
	resp["data"] = data
	utils.Respond(w, resp)
}

var GetUsers = func(w http.ResponseWriter, r *http.Request) {
	data := models.GetUsers()
	resp := utils.Message(true, "success")
	resp["data"] = data
	utils.Respond(w, resp)
}