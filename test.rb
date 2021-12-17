if 14 % 2 == 0
  puts '14 is even'
else
  puts '14 is odd'
end

def even?(num)
  (num % 2).zero? ? "#{num} is even" : "#{num} is odd"
end

puts even?(15)
