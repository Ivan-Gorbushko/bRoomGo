# Dockerfile References: https://docs.docker.com/engine/reference/builder/

# Start from golang:1.12-alpine base image
FROM golang:1.12-alpine

# alpine LINUX
#https://stackoverflow.com/questions/56580412/mysql-installation-for-alpine-linux-in-docker
# The latest alpine images don't have some tools like (`git` and `bash`).
# Adding git, bash and openssh to the image
RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

#RUN apk update && \
#    apk add mysql mysql-client

# Add Maintainer Info
LABEL maintainer="Ivan Horbushko <ivan.gorbushko@gmail.com>"

# Set the Current Working Directory inside the container
WORKDIR /app

# Copy go mod and sum files
COPY go.mod go.sum ./

# HELP
# go get -u
# go get -u=patch
# go get github.com/robteix/testmod@v1.0.1

# Download all dependancies. Dependencies will be cached if the go.mod and go.sum files are not changed
RUN go mod download

# Copy the source from the current directory to the Working Directory inside the container
COPY . .

# Build the Go app
RUN go build -o main .

# Expose port 8080 to the outside world
EXPOSE 8080

# Run the executable
CMD ["./main"]