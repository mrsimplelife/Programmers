func solution(_ s: String) -> Bool {
    guard
        Int(s) != nil,
        s.count == 4 || s.count == 6
    else {
        return false
    }

    return true
}