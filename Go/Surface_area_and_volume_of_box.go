// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

package main

import "fmt"

var l int = 2

func main() {
	result := boxCalulations()
	fmt.Println("surface area of box is ", area)
	fmt.Println("surface area of box is ", volume)

}

func boxCalulations() []int {
	area = 6 * (l * 2)
	volume = l * l * l
	return []int{area, volume}

}

func boxCalculations() []int {
	area := 6 * (l * 2)
	volume := l * l * l
	return []int{area, volume}
}
