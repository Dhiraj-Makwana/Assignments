public class BinarySearch {
    public static int binSearch(int arr[], int target) {
        int start = 0;
        int end = arr.length;

        while(start <= end) {
            int mid = (start + end)/2;
            if(arr[mid] < target) {
                start = mid + 1;
            }
            else if(arr[mid] > target) {
                end = mid - 1;
            }
            else {
                return mid;
            }
        }
        return -1;
    }

    public static void main(String args[]) {
        int arr[] = {2,3,6,7,8,10,11,13}; //sorted array is pre-requisite
        int target = 13;

        if(binSearch(arr, target) != -1) {
            System.out.println(target+ " is at index "+ binSearch(arr, target));
        }
        else {
            System.out.println(target+ " is not found");
        }
    }
}