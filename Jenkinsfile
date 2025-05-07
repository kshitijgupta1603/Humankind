pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git url: 'https://github.com/kshitijgupta1603/Humankind.git', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Check if npm is installed and run npm install
                    if (fileExists('package.json')) {
                        bat 'npm install'
                    } else {
                        error 'package.json not found. Please ensure the project is a Node.js project.'
                    }
                }
            }
        }

        stage('Build Project') {
            steps {
                script {
                    // Ensure npm run build is defined in package.json
                    if (bat(script: 'npm run build', returnStatus: true) == 0) {
                        echo 'Build completed successfully'
                    } else {
                        error 'npm run build failed. Please check the build script in package.json.'
                    }
                }
            }
        }
    }

    post {
        success {
            echo 'Build completed successfully!'
        }
        failure {
            echo 'Build failed. Please check the logs.'
        }
    }
}
