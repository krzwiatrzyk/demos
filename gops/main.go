package main

import (
	"log"
	"time"

	"github.com/google/gops/agent"
)

func main() {
	if err := agent.Listen(agent.Options{
		Addr: ":8080",
	}); err != nil {
		log.Fatal(err)
	}
	time.Sleep(time.Minute)
}
