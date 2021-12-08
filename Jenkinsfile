pipeline {
  agent any
  stages {
    stage("build") {
      steps {
        echo 'building the app...'
      }
    }
    stage("test") {
      steps {
        echo 'testing the app...'
        script {
          def test = 2+2>3 ? 'Correct' : 'Not Correct'
          echo test
        }
      }
    }
    stage("deploy") {
      steps {
        echo 'deploying the app...'
      }
    }
  }
}
